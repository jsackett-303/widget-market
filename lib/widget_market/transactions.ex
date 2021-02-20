defmodule WidgetMarket.Transactions do
  @moduledoc """
  The Transactions context.
  """

  import Ecto.Query, warn: false
  alias WidgetMarket.Transactions.Transaction
  alias WidgetMarket.{Repo, Users, Widgets}

  @doc """
  Returns the list of transactions.

  ## Examples

      iex> list_transactions()
      [%Transaction{}, ...]

  """
  def list_transactions do
    Repo.all(Transaction)
  end

  @doc """
  Gets a single transaction.

  Raises `Ecto.NoResultsError` if the Transaction does not exist.

  ## Examples

      iex> get_transaction(123)
      %Transaction{}

      iex> get_transaction(456)
      ** (Ecto.NoResultsError)

  """
  def get_transaction(id) do
    Repo.get!(Transaction, id)
  end

  @doc """
  Creates a transaction.

  Debits the buyer's credit by the widget price
  and credits the seller's by the same price minus
  a 5% marketplace fee.

  ## Examples

      iex> create_transaction(%{field: value})
      {:ok, %Transaction{}}

      iex> create_transaction(%{field: bad_value})
      {:error, any()}

  """
  def create_transaction(
    %{buyer_id: buyer_id,
      seller_id: seller_id,
      widget_id: widget_id} = attrs) do

    Repo.transaction(fn ->
      widget = Widgets.get_widget!(widget_id)

      with {:ok, _} <- Users.credit(seller_id, widget.price),
           {:ok, _} <- Users.debit(buyer_id, widget.price),
           {:ok, _} <- Widgets.update_widget(widget, %{user_id: buyer_id}),
           {:ok, transaction} <-
             %Transaction{}
             |> Transaction.changeset(attrs)
             |> Repo.insert()
      do
        transaction
      else
        error -> Repo.rollback(error)
      end
    end)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking transaction changes.

  ## Examples

      iex> change_transaction(transaction)
      %Ecto.Changeset{data: %Transaction{}}

  """
  def change_transaction(%Transaction{} = transaction, attrs \\ %{}) do
    Transaction.changeset(transaction, attrs)
  end
end
