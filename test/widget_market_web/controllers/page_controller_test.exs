defmodule WidgetMarketWeb.PageControllerTest do
  use WidgetMarketWeb.ConnCase

  test "GET /session/new", %{conn: conn} do
    conn = get(conn, "/session/new")
    assert html_response(conn, 200) =~ "Sign in"
  end
end
