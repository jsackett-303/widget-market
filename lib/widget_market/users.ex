defmodule WidgetMarket.Users do
  use Pow.Ecto.Context,
    repo: WidgetMarket.Repo,
    user: WidgetMarket.Users.User

  alias WidgetMarket.Repo
  alias WidgetMarket.Users.User

  def create(params) do
    pow_create(params)
  end

  @doc """
  Gets all users

  ## Examples

      iex> list_users()
      [%User{}]

  """
  def list_users(), do: Repo.all(User)

  @doc """
  Gets a single user.

  Raises `Ecto.NoResultsError` if the User does not exist.

  ## Examples

      iex> get_user(123)
      %User{}

      iex> get_user(456)
      ** (Ecto.NoResultsError)

  """
  def get_user(id) do
    Repo.get!(User, id)
  end

  @doc """
  subtracts the market fee from the widget price
  and credits the difference to the seller
  """
  def credit(seller_id, widget_price) do
    seller = get_user(seller_id)
    fee = Decimal.mult(widget_price, market_fee())
    credit = Decimal.sub(widget_price, fee)
    |> Decimal.add(seller.credit)

    User.changeset(seller, %{credit: credit})
    |> Repo.update()
  end

  @doc """
  subtracts the the widget price from the buyer
  if the buyer has no credit, an error tuple is returned
  """
  def debit(buyer_id, widget_price) do
    buyer = get_user(buyer_id)

    case Decimal.compare(buyer.credit, "0.0") do
      :gt ->
        remaining_credit = Decimal.sub(buyer.credit, widget_price)
        new_credit = Decimal.max(remaining_credit, "0.0")
        User.changeset(buyer, %{credit: new_credit})
        |> Repo.update()

      _ ->
        {:error, "insufficient funds"}
    end
  end

  defp market_fee(), do: Decimal.from_float(0.05)
end
