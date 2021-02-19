defmodule WidgetMarket.Repo do
  use Ecto.Repo,
    otp_app: :widget_market,
    adapter: Ecto.Adapters.Postgres
end
