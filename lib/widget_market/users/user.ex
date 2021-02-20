defmodule WidgetMarket.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema
  import Ecto.Changeset

  alias WidgetMarket.Widgets.Widget

  @required_fields [:first_name, :last_name]

  schema "users" do
    field(:first_name, :string)
    field(:last_name, :string)

    pow_user_fields()

    has_many :widgets, Widget

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> cast(attrs, @required_fields)
    |> pow_changeset(attrs)
    |> validate_required(@required_fields)
  end
end
