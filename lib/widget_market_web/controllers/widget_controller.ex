defmodule WidgetMarketWeb.WidgetController do
  @moduledoc """
  This module contains the controller actions for widget manipulation
  """

  use WidgetMarketWeb, :controller

  alias WidgetMarket.Widgets
  alias WidgetMarket.Widgets.Widget

  @doc """
  Returns the list of widgets.
  """
  def index(conn, _params) do
    widgets = Widgets.list_widgets()
    render(conn, "index.html", widgets: widgets)
  end

  @doc """
  Yields a form for creating a new widget
  """
  def new(conn, _params) do
    changeset = Widgets.change_widget(%Widget{})
    render(conn, "new.html", changeset: changeset)
  end

  @doc """
  Creates a new widget
  """
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

  @doc """
  Displays a widget
  """
  def show(conn, %{"id" => id}) do
    widget = Widgets.get_widget!(id)
    render(conn, "show.html", widget: widget)
  end

  @doc """
  Yields a form for updating a widget
  """
  def edit(conn, %{"id" => id}) do
    widget = Widgets.get_widget!(id)
    changeset = Widgets.change_widget(widget)
    render(conn, "edit.html", widget: widget, changeset: changeset)
  end

  @doc """
  Updates a widget. Only the widget owner is allowed to do this.
  """
  def update(conn, %{"id" => id, "widget" => widget_params}) do
    user_id = current_user(conn)
    widget = Widgets.get_widget!(id)

    if widget.user_id != user_id do
      conn
      |> put_flash(:error, "That action is not allowed.")
      |> redirect(to: Routes.widget_path(conn, :index))
    else
      case Widgets.update_widget(widget, widget_params) do
        {:ok, widget} ->
          conn
          |> put_flash(:info, "Widget updated successfully.")
          |> redirect(to: Routes.widget_path(conn, :show, widget))

        {:error, %Ecto.Changeset{} = changeset} ->
          render(conn, "edit.html", widget: widget, changeset: changeset)
      end
    end
  end

  @doc """
  Deletes a widget. Only the widget owner is allowed to do this.
  """
  def delete(conn, %{"id" => id}) do
    user_id = current_user(conn)
    widget = Widgets.get_widget!(id)
    if widget.user_id != user_id do
      conn
      |> put_flash(:error, "That action is not allowed.")
      |> redirect(to: Routes.widget_path(conn, :index))
    else
      {:ok, _widget} = Widgets.delete_widget(widget)

      conn
      |> put_flash(:info, "Widget deleted successfully.")
      |> redirect(to: Routes.widget_path(conn, :index))
    end
  end

  defp current_user(%Plug.Conn{assigns: %{current_user: user}}) do
    user.id
  end
end
