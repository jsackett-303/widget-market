defmodule WidgetMarket.WidgetsTest do
  use WidgetMarket.DataCase

  alias WidgetMarket.{Repo, Users, Widgets}
  alias WidgetMarket.Widgets.Widget

  describe "widgets" do

    @user_attrs %{email: "foo@example.com", first_name: "some", last_name: "name",
      credit: 10.00, password: "password", password_confirmation: "password"}
    @valid_attrs %{description: "some description", name: "some name", price: "120.5", user_id: 42}
    @update_attrs %{description: "some updated description", name: "some updated name", price: "456.7", user_id: 43}
    @invalid_attrs %{description: nil, name: nil, price: nil, user_id: nil}

    def user_fixture(attrs \\ %{}) do
      {:ok, user} =
        attrs
        |> Enum.into(@user_attrs)
        |> Users.create()

      user
    end

    def widget_fixture(attrs \\ %{}) do
      user = user_fixture()
      local_attrs = Map.put(@valid_attrs, :user_id, user.id)

      {:ok, widget} =
        attrs
        |> Enum.into(local_attrs)
        |> Widgets.create_widget()

      widget
      |> Repo.preload(:user)
    end

    test "list_widgets/0 returns all widgets" do
      widget = widget_fixture()
      assert Widgets.list_widgets() == [widget]
    end

    test "get_widget!/1 returns the widget with given id" do
      widget = widget_fixture()
      assert Widgets.get_widget!(widget.id) == widget
    end

    test "create_widget/1 with valid data creates a widget" do
      user = user_fixture()
      attrs = Map.put(@valid_attrs, :user_id, user.id)
      assert {:ok, %Widget{} = widget} = Widgets.create_widget(attrs)
      assert widget.description == "some description"
      assert widget.name == "some name"
      assert widget.price == Decimal.new("120.5")
      assert widget.user_id == user.id
    end

    test "create_widget/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Widgets.create_widget(@invalid_attrs)
    end

    test "update_widget/2 with valid data updates the widget" do
      user = user_fixture(%{email: "bar@example.net"})
      attrs = Map.put(@update_attrs, :user_id, user.id)
      widget = widget_fixture()
      assert {:ok, %Widget{} = widget} = Widgets.update_widget(widget, attrs)
      assert widget.description == "some updated description"
      assert widget.name == "some updated name"
      assert widget.price == Decimal.new("456.7")
      assert widget.user_id == user.id
    end

    test "update_widget/2 with invalid data returns error changeset" do
      widget = widget_fixture()
      assert {:error, %Ecto.Changeset{}} = Widgets.update_widget(widget, @invalid_attrs)
      assert widget == Widgets.get_widget!(widget.id)
    end

    test "delete_widget/1 deletes the widget" do
      widget = widget_fixture()
      assert {:ok, %Widget{}} = Widgets.delete_widget(widget)
      assert_raise Ecto.NoResultsError, fn -> Widgets.get_widget!(widget.id) end
    end

    test "delete_all/0 deletes all widgets" do
      widget_fixture()
      assert {1, nil} = Widgets.delete_all()
      assert Widgets.list_widgets() == []
    end

    test "change_widget/1 returns a widget changeset" do
      widget = widget_fixture()
      assert %Ecto.Changeset{} = Widgets.change_widget(widget)
    end
  end
end
