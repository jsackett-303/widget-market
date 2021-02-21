defmodule WidgetMarket do
  @moduledoc """
  Look in here for detailed documentation of this application

  Products used to build this application
   * elixir 1.11.3 (OTP 23) - trying to be up to date
   * phoenix 1.5.7 - again, going with the latest here
   * pow 1.0.22 - used for user authentication, registration
   * ecto_psql_extras 0.6.4 - to fulfill my live dashboard curiosity
   * ex_doc 0.23.0 - to create this documentation

  I chose pow after a a bit of a web search and appreciated the
  simplicity of adding it to an html serving app. Not so sure it
  is the best choice for an api app. But, yet to do the research
  to back that statement completely.

  I question choosing a decimal column for the widget prices and user
  credit. Column manipuation requires a bit of hand holding with
  the Decimal library.

  To run the application, see the instructions in the README.md file.

  When you access the page at http://localhost:4000 you will be
  presented with a login form and a Register link below. If you
  already have an account, login. Or register as a new user
  and then login. You may set your initial marketplace credit when
  you sign-up or anytime thereafter by accessing the Edit account link
  at the top right of the page.

  You will then be presented with a list of widgets and can begin
  participating in the market. If you have widgets to sell, create
  them. If you would like to purchase widgets, just follow the
  Purchase link.

  You cannot purchase your own widgets and cannot edit or delete
  other user's widgets. You may not make a purchase when your
  available credit reaches 0.0.

  When you make a purchase, the price is debited from your available
  credit. If you sell a widget, the price is credited to you minus
  a five percent marketplace fee.

  Happy widgeting!

  Thank you.
  """
end
