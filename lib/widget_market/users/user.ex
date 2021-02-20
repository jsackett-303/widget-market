defmodule WidgetMarket.Users.User do
  use Ecto.Schema
  use Pow.Ecto.Schema
  import Ecto.Changeset

  @required_fields [:first_name, :last_name]

  schema "users" do
    field(:first_name, :string)
    field(:last_name, :string)

    pow_user_fields()

    timestamps()
  end

  def changeset(user_or_changeset, attrs) do
    user_or_changeset
    |> Map.put(:first_name, attrs["first_name"])
    |> Map.put(:last_name, attrs["last_name"])
    |> pow_changeset(attrs)
    |> validate_required(@required_fields)
  end
end
