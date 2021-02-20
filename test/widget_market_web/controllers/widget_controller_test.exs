defmodule WidgetMarketWeb.WidgetControllerTest do
  use WidgetMarketWeb.ConnCase

  alias Pow.Plug
  alias WidgetMarket.{Repo, Users, Widgets}

  @create_attrs %{description: "some description", name: "some name", price: "120.5"}
  @update_attrs %{description: "some updated description", name: "some updated name", price: "456.7"}
  @invalid_attrs %{description: nil, name: nil, price: nil}
  @user_attrs %{email: "foo@example.com", first_name: "some", last_name: "name",
      password: "password", password_confirmation: "password"}
  @another_user_attrs %{email: "bar@example.com", first_name: "new", last_name: "name",
      password: "password", password_confirmation: "password"}

  def fixture(:user, attrs) do
    {:ok, user} = Users.create(attrs)
    user
  end

  def fixture(:widget, attrs) do
    user = Repo.get_by(Users.User, email: "foo@example.com")
    new_attrs = Map.put(attrs, :user_id, user.id)
    {:ok, widget} = Widgets.create_widget(new_attrs)

    widget
    |> Repo.preload(:user)
  end

  describe "index" do
    setup [:create_user]

    test "lists all widgets", %{conn: conn, user: user} do
      conn = conn
        |> Plug.assign_current_user(user, [])
        |> get(Routes.widget_path(conn, :index))
      assert html_response(conn, 200) =~ "Listing Widgets"
    end
  end

  describe "new widget" do
    setup [:create_user]

    test "renders form", %{conn: conn, user: user} do
      conn = conn
        |> Plug.assign_current_user(user, [])
        |> get(Routes.widget_path(conn, :new))
      assert html_response(conn, 200) =~ "New Widget"
    end
  end

  describe "create widget" do
    setup [:create_user]

    test "redirects to show when data is valid", %{conn: conn, user: user} do
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = post(pow_conn, Routes.widget_path(conn, :create), widget: @create_attrs)

      assert %{id: id} = redirected_params(conn)
      assert redirected_to(conn) == Routes.widget_path(conn, :show, id)

      conn = get(pow_conn, Routes.widget_path(conn, :show, id))
      assert html_response(conn, 200) =~ "Show Widget"
    end

    test "renders errors when data is invalid", %{conn: conn, user: user} do
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = post(pow_conn, Routes.widget_path(conn, :create), widget: @invalid_attrs)
      assert html_response(conn, 200) =~ "New Widget"
    end
  end

  describe "edit widget" do
    setup [:create_user, :create_widget]

    test "renders form for editing chosen widget", %{conn: conn, user: user, widget: widget} do
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = get(pow_conn, Routes.widget_path(conn, :edit, widget))
      assert html_response(conn, 200) =~ "Edit Widget"
    end
  end

  describe "update widget" do
    setup [:create_user, :create_widget]

    test "redirects when data is valid", %{conn: conn, user: user, widget: widget} do
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = put(pow_conn, Routes.widget_path(conn, :update, widget), widget: @update_attrs)
      assert redirected_to(conn) == Routes.widget_path(conn, :show, widget)

      conn = get(pow_conn, Routes.widget_path(conn, :show, widget))
      assert html_response(conn, 200) =~ "some updated description"
    end

    test "does not allow update by another user", %{conn: conn, widget: widget} do
      user = create_another_user()
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = put(pow_conn, Routes.widget_path(conn, :update, widget), widget: @invalid_attrs)
      assert redirected_to(conn) == Routes.widget_path(pow_conn, :index)
    end

    test "renders errors when data is invalid", %{conn: conn, user: user, widget: widget} do
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = put(pow_conn, Routes.widget_path(conn, :update, widget), widget: @invalid_attrs)
      assert html_response(conn, 200) =~ "Edit Widget"
    end
  end

  describe "delete widget" do
    setup [:create_user, :create_widget]

    test "deletes chosen widget", %{conn: conn, user: user, widget: widget} do
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = delete(pow_conn, Routes.widget_path(conn, :delete, widget))
      assert redirected_to(conn) == Routes.widget_path(pow_conn, :index)
      assert_error_sent 404, fn ->
        get(pow_conn, Routes.widget_path(conn, :show, widget))
      end
    end

    test "does not allow delete by another user", %{conn: conn, widget: widget} do
      user = create_another_user()
      pow_conn = Plug.assign_current_user(conn, user, [])
      conn = delete(pow_conn, Routes.widget_path(conn, :delete, widget))
      assert redirected_to(conn) == Routes.widget_path(pow_conn, :index)
    end
  end

  defp create_user(_) do
    user = fixture(:user, @user_attrs)
    %{user: user}
  end

  defp create_another_user() do
    fixture(:user, @another_user_attrs)
  end

  defp create_widget(_) do
    widget = fixture(:widget, @create_attrs)
    %{widget: widget}
  end
end
