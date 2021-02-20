defmodule WidgetMarket.Users do
  use Pow.Ecto.Context,
    repo: WidgetMarket.Repo,
    user: WidgetMarket.Users.User

  def create(params) do
    pow_create(params)
  end
end
