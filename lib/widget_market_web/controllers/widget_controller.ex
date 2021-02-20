defmodule WidgetMarketWeb.WidgetController do
  use WidgetMarketWeb, :controller

  alias WidgetMarket.Widgets
  alias WidgetMarket.Widgets.Widget

  def index(conn, _params) do
    widgets = Widgets.list_widgets()
    render(conn, "index.html", widgets: widgets)
  end

  def new(conn, _params) do
    changeset = Widgets.change_widget(%Widget{})
    render(conn, "new.html", changeset: changeset)
  end

  def create(conn, %{"widget" => params}) do
    user_id = current_user(conn)
    widget_params = Map.merge(params, %{"user_id" => user_id})

    case Widgets.create_widget(widget_params) do
      {:ok, widget} ->
        conn
        |> put_flash(:info, "Widget created successfully.")
        |> redirect(to: Routes.widget_path(conn, :show, widget))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "new.html", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    widget = Widgets.get_widget!(id)
    render(conn, "show.html", widget: widget)
  end

  def edit(conn, %{"id" => id}) do
    widget = Widgets.get_widget!(id)
    changeset = Widgets.change_widget(widget)
    render(conn, "edit.html", widget: widget, changeset: changeset)
  end

  def update(conn, %{"id" => id, "widget" => widget_params}) do
    widget = Widgets.get_widget!(id)

    case Widgets.update_widget(widget, widget_params) do
      {:ok, widget} ->
        conn
        |> put_flash(:info, "Widget updated successfully.")
        |> redirect(to: Routes.widget_path(conn, :show, widget))

      {:error, %Ecto.Changeset{} = changeset} ->
        render(conn, "edit.html", widget: widget, changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    widget = Widgets.get_widget!(id)
    {:ok, _widget} = Widgets.delete_widget(widget)

    conn
    |> put_flash(:info, "Widget deleted successfully.")
    |> redirect(to: Routes.widget_path(conn, :index))
  end

  defp current_user(%Plug.Conn{assigns: %{current_user: user}}) do
    user.id
  end
end
