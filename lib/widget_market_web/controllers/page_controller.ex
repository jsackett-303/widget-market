defmodule WidgetMarketWeb.PageController do
  use WidgetMarketWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
