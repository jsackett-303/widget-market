defmodule WidgetMarket.Users do
  use Pow.Ecto.Context,
    repo: WidgetMarket.Repo,
    user: WidgetMarket.Users.User

  alias WidgetMarket.Repo
  alias WidgetMarket.Users.User

  def create(params) do
    pow_create(params)
  end

  def list_users(), do: Repo.all(User)
end
