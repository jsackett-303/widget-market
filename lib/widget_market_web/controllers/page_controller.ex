defmodule WidgetMarketWeb.PageController do
  @moduledoc false

  use WidgetMarketWeb, :controller

  def index(conn, _params) do
    redirect(conn, to: "/widgets")
  end
end
