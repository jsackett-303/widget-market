# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

config :widget_market,
  ecto_repos: [WidgetMarket.Repo]

# Configures the endpoint
config :widget_market, WidgetMarketWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Bv8moHF4eSkIaxZpDjeqCh2r9sDPxBamk3mTlEqm2x5PogeZ3e66H1aOhOQMqKph",
  render_errors: [view: WidgetMarketWeb.ErrorView, accepts: ~w(html json), layout: false],
  pubsub_server: WidgetMarket.PubSub,
  live_view: [signing_salt: "t0o74iDn"]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

config :widget_market, :pow,
  user: WidgetMarket.Users.User,
  repo: WidgetMarket.Repo,
  web_module: WidgetMarketWeb,
  users_context: WidgetMarket.Users

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
