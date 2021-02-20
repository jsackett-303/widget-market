defmodule WidgetMarket.TransactionsTest do
  use WidgetMarket.DataCase

  alias WidgetMarket.{Users, Transactions, Widgets}
  alias WidgetMarket.Transactions.Transaction

  describe "transactions" do

    @buyer_attrs %{email: "foo@example.com", first_name: "some", last_name: "name",
      credit: 10.00, password: "password", password_confirmation: "password"}
    @seller_attrs %{email: "bar@example.com", first_name: "bar", last_name: "none",
      credit: 10.00, password: "password", password_confirmation: "password"}
    @widget_attrs %{description: "some description", name: "some name", price: 2.50}

    def user_fixture(attrs) do
      {:ok, user} = Users.create(attrs)
      user
    end

    def widget_fixture(user_id) do
      attrs = Map.put(@widget_attrs, :user_id, user_id)
      {:ok, widget} = Widgets.create_widget(attrs)
      widget
    end

    def transaction_fixture(attrs \\ %{}) do
      buyer = user_fixture(@buyer_attrs)
      seller = user_fixture(@seller_attrs)
      widget = widget_fixture(seller.id)
      local_attrs = %{
        buyer_id: buyer.id,
        seller_id: seller.id,
        widget_id: widget.id
      }

      {:ok, transaction} =
        attrs
        |> Enum.into(local_attrs)
        |> Transactions.create_transaction()

      transaction
    end

    test "list_transactions/0 returns all transactions" do
      transaction = transaction_fixture()
      assert Transactions.list_transactions() == [transaction]
    end

    test "get_transaction/1 returns the transaction with given id" do
      transaction = transaction_fixture()
      assert Transactions.get_transaction(transaction.id) == transaction
    end

    test "create_transaction/1 with valid data creates a transaction" do
      buyer = user_fixture(@buyer_attrs)
      seller = user_fixture(@seller_attrs)
      widget = widget_fixture(seller.id)
      attrs = %{
        buyer_id: buyer.id,
        seller_id: seller.id,
        widget_id: widget.id
      }
      assert {:ok, %Transaction{} = transaction} = Transactions.create_transaction(attrs)
      assert transaction.buyer_id == buyer.id
      assert transaction.seller_id == seller.id
      assert transaction.widget_id == widget.id

      buy_diff = Decimal.sub("10.00", widget.price)
      fee = Decimal.mult(widget.price, "0.05")
      sell_diff =
        Decimal.add("10.0", widget.price)
        |> Decimal.sub(fee)

      seller = Users.get_user(seller.id)
      buyer = Users.get_user(buyer.id)
      assert Decimal.compare(seller.credit, "#{sell_diff}") == :eq
      assert Decimal.compare(buyer.credit, "#{buy_diff}") == :eq
    end

    test "create_transaction/1 fails when buyer has no credit " do
      buyer =
        Map.put(@buyer_attrs, :credit, 0.00)
        |> user_fixture()

      seller = user_fixture(@seller_attrs)
      widget = widget_fixture(seller.id)
      attrs = %{
        buyer_id: buyer.id,
        seller_id: seller.id,
        widget_id: widget.id
      }
      assert {:error, _} = Transactions.create_transaction(attrs)
      seller = Users.get_user(seller.id)
      buyer = Users.get_user(buyer.id)
      assert Decimal.compare(seller.credit, "10.0") == :eq
      assert Decimal.compare(buyer.credit, "0.0") == :eq
    end

    test "create_transaction/1 succeeds but leaves buyer without credit " do
      buyer =
        Map.put(@buyer_attrs, :credit, 1.00)
        |> user_fixture()

      seller = user_fixture(@seller_attrs)
      widget = widget_fixture(seller.id)
      attrs = %{
        buyer_id: buyer.id,
        seller_id: seller.id,
        widget_id: widget.id
      }
      assert {:ok, _transaction} = Transactions.create_transaction(attrs)
      buyer = Users.get_user(buyer.id)
      assert Decimal.compare(buyer.credit, "0.0") == :eq
    end

    test "change_transaction/1 returns a transaction changeset" do
      transaction = transaction_fixture()
      assert %Ecto.Changeset{} = Transactions.change_transaction(transaction)
    end
  end
end
