defmodule WidgetMarketWeb.PageController do
  use WidgetMarketWeb, :controller

  def index(conn, _params) do
    redirect(conn, to: "/widgets")
  end
end
