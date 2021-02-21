searchNodes=[{"doc":"Look in here for detailed documentation of this applicationProducts used to build this applicationelixir 1.11.3 (OTP 23) - trying to be up to datephoenix 1.5.7 - again, going with the latest herepow 1.0.22 - used for user authentication, registrationecto_psql_extras 0.6.4 - to fulfill my live dashboard curiosityex_doc 0.23.0 - to create this documentationI chose pow after a a bit of a web search and appreciated the simplicity of adding it to an html serving app. Not so sure it is the best choice for an api app. But, yet to do the research to back that statement completely.I question choosing a decimal column for the widget prices and user credit. Column manipuation requires a bit of hand holding with the Decimal library.To run the application, see the instructions in the README.md file.When you access the page at http://localhost:4000 you will be presented with a login form and a Register link below. If you already have an account, login. Or register as a new user and then login. You may set your initial marketplace credit when you sign-up or anytime thereafter by accessing the Edit account link at the top right of the page.You will then be presented with a list of widgets and can begin participating in the market. If you have widgets to sell, create them. If you would like to purchase widgets, just follow the Purchase link.You cannot purchase your own widgets and cannot edit or delete other user's widgets. You may not make a purchase when your available credit reaches 0.0.When you make a purchase, the price is debited from your available credit. If you sell a widget, the price is credited to you minus a five percent marketplace fee.Happy widgeting!Thank you.","ref":"WidgetMarket.html","title":"WidgetMarket","type":"module"},{"doc":"","ref":"WidgetMarket.Repo.html","title":"WidgetMarket.Repo","type":"module"},{"doc":"Callback implementation for Ecto.Repo.aggregate/3.","ref":"WidgetMarket.Repo.html#aggregate/3","title":"WidgetMarket.Repo.aggregate/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.aggregate/4.","ref":"WidgetMarket.Repo.html#aggregate/4","title":"WidgetMarket.Repo.aggregate/4","type":"function"},{"doc":"Callback implementation for Ecto.Repo.all/2.","ref":"WidgetMarket.Repo.html#all/2","title":"WidgetMarket.Repo.all/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.checkout/2.","ref":"WidgetMarket.Repo.html#checkout/2","title":"WidgetMarket.Repo.checkout/2","type":"function"},{"doc":"","ref":"WidgetMarket.Repo.html#child_spec/1","title":"WidgetMarket.Repo.child_spec/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.config/0.","ref":"WidgetMarket.Repo.html#config/0","title":"WidgetMarket.Repo.config/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.default_options/1.","ref":"WidgetMarket.Repo.html#default_options/1","title":"WidgetMarket.Repo.default_options/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete/2.","ref":"WidgetMarket.Repo.html#delete/2","title":"WidgetMarket.Repo.delete/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete!/2.","ref":"WidgetMarket.Repo.html#delete!/2","title":"WidgetMarket.Repo.delete!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.delete_all/2.","ref":"WidgetMarket.Repo.html#delete_all/2","title":"WidgetMarket.Repo.delete_all/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.exists?/2.","ref":"WidgetMarket.Repo.html#exists?/2","title":"WidgetMarket.Repo.exists?/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes an EXPLAIN statement or similar depending on the adapter to obtain statistics for the given query.See Ecto.Adapters.SQL.explain/4 for more information.","ref":"WidgetMarket.Repo.html#explain/3","title":"WidgetMarket.Repo.explain/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get/3.","ref":"WidgetMarket.Repo.html#get/3","title":"WidgetMarket.Repo.get/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get!/3.","ref":"WidgetMarket.Repo.html#get!/3","title":"WidgetMarket.Repo.get!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_by/3.","ref":"WidgetMarket.Repo.html#get_by/3","title":"WidgetMarket.Repo.get_by/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_by!/3.","ref":"WidgetMarket.Repo.html#get_by!/3","title":"WidgetMarket.Repo.get_by!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.get_dynamic_repo/0.","ref":"WidgetMarket.Repo.html#get_dynamic_repo/0","title":"WidgetMarket.Repo.get_dynamic_repo/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.in_transaction?/0.","ref":"WidgetMarket.Repo.html#in_transaction?/0","title":"WidgetMarket.Repo.in_transaction?/0","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert/2.","ref":"WidgetMarket.Repo.html#insert/2","title":"WidgetMarket.Repo.insert/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert!/2.","ref":"WidgetMarket.Repo.html#insert!/2","title":"WidgetMarket.Repo.insert!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_all/3.","ref":"WidgetMarket.Repo.html#insert_all/3","title":"WidgetMarket.Repo.insert_all/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_or_update/2.","ref":"WidgetMarket.Repo.html#insert_or_update/2","title":"WidgetMarket.Repo.insert_or_update/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.insert_or_update!/2.","ref":"WidgetMarket.Repo.html#insert_or_update!/2","title":"WidgetMarket.Repo.insert_or_update!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.load/2.","ref":"WidgetMarket.Repo.html#load/2","title":"WidgetMarket.Repo.load/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.one/2.","ref":"WidgetMarket.Repo.html#one/2","title":"WidgetMarket.Repo.one/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.one!/2.","ref":"WidgetMarket.Repo.html#one!/2","title":"WidgetMarket.Repo.one!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.preload/3.","ref":"WidgetMarket.Repo.html#preload/3","title":"WidgetMarket.Repo.preload/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.prepare_query/3.","ref":"WidgetMarket.Repo.html#prepare_query/3","title":"WidgetMarket.Repo.prepare_query/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.put_dynamic_repo/1.","ref":"WidgetMarket.Repo.html#put_dynamic_repo/1","title":"WidgetMarket.Repo.put_dynamic_repo/1","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given query.See Ecto.Adapters.SQL.query/4 for more information.","ref":"WidgetMarket.Repo.html#query/3","title":"WidgetMarket.Repo.query/3","type":"function"},{"doc":"A convenience function for SQL-based repositories that executes the given query.See Ecto.Adapters.SQL.query!/4 for more information.","ref":"WidgetMarket.Repo.html#query!/3","title":"WidgetMarket.Repo.query!/3","type":"function"},{"doc":"Callback implementation for Ecto.Repo.reload/2.","ref":"WidgetMarket.Repo.html#reload/2","title":"WidgetMarket.Repo.reload/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.reload!/2.","ref":"WidgetMarket.Repo.html#reload!/2","title":"WidgetMarket.Repo.reload!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.rollback/1.","ref":"WidgetMarket.Repo.html#rollback/1","title":"WidgetMarket.Repo.rollback/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.start_link/1.","ref":"WidgetMarket.Repo.html#start_link/1","title":"WidgetMarket.Repo.start_link/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.stop/1.","ref":"WidgetMarket.Repo.html#stop/1","title":"WidgetMarket.Repo.stop/1","type":"function"},{"doc":"Callback implementation for Ecto.Repo.stream/2.","ref":"WidgetMarket.Repo.html#stream/2","title":"WidgetMarket.Repo.stream/2","type":"function"},{"doc":"A convenience function for SQL-based repositories that translates the given query to SQL.See Ecto.Adapters.SQL.to_sql/3 for more information.","ref":"WidgetMarket.Repo.html#to_sql/2","title":"WidgetMarket.Repo.to_sql/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.transaction/2.","ref":"WidgetMarket.Repo.html#transaction/2","title":"WidgetMarket.Repo.transaction/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update/2.","ref":"WidgetMarket.Repo.html#update/2","title":"WidgetMarket.Repo.update/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update!/2.","ref":"WidgetMarket.Repo.html#update!/2","title":"WidgetMarket.Repo.update!/2","type":"function"},{"doc":"Callback implementation for Ecto.Repo.update_all/3.","ref":"WidgetMarket.Repo.html#update_all/3","title":"WidgetMarket.Repo.update_all/3","type":"function"},{"doc":"The Transactions context.","ref":"WidgetMarket.Transactions.html","title":"WidgetMarket.Transactions","type":"module"},{"doc":"Returns an %Ecto.Changeset{} for tracking transaction changes.Examplesiex&gt; change_transaction(transaction) %Ecto.Changeset{data: %Transaction{}}","ref":"WidgetMarket.Transactions.html#change_transaction/2","title":"WidgetMarket.Transactions.change_transaction/2","type":"function"},{"doc":"Creates a transaction.Debits the buyer's credit by the widget price and credits the seller's by the same price minus a 5% marketplace fee.Examplesiex&gt; create_transaction(%{field: value}) {:ok, %Transaction{}} iex&gt; create_transaction(%{field: bad_value}) {:error, any()}","ref":"WidgetMarket.Transactions.html#create_transaction/1","title":"WidgetMarket.Transactions.create_transaction/1","type":"function"},{"doc":"Gets a single transaction.Raises Ecto.NoResultsError if the Transaction does not exist.Examplesiex&gt; get_transaction(123) %Transaction{} iex&gt; get_transaction(456) ** (Ecto.NoResultsError)","ref":"WidgetMarket.Transactions.html#get_transaction/1","title":"WidgetMarket.Transactions.get_transaction/1","type":"function"},{"doc":"Returns the list of transactions.Examplesiex&gt; list_transactions() [%Transaction{}, ...]","ref":"WidgetMarket.Transactions.html#list_transactions/0","title":"WidgetMarket.Transactions.list_transactions/0","type":"function"},{"doc":"","ref":"WidgetMarket.Users.html","title":"WidgetMarket.Users","type":"module"},{"doc":"Callback implementation for Pow.Context.authenticate/1.","ref":"WidgetMarket.Users.html#authenticate/1","title":"WidgetMarket.Users.authenticate/1","type":"function"},{"doc":"Callback implementation for Pow.Context.create/1.","ref":"WidgetMarket.Users.html#create/1","title":"WidgetMarket.Users.create/1","type":"function"},{"doc":"subtracts the market fee from the widget price and credits the difference to the seller","ref":"WidgetMarket.Users.html#credit/2","title":"WidgetMarket.Users.credit/2","type":"function"},{"doc":"subtracts the the widget price from the buyer if the buyer has no credit, an error tuple is returned","ref":"WidgetMarket.Users.html#debit/2","title":"WidgetMarket.Users.debit/2","type":"function"},{"doc":"Callback implementation for Pow.Context.delete/1.","ref":"WidgetMarket.Users.html#delete/1","title":"WidgetMarket.Users.delete/1","type":"function"},{"doc":"Callback implementation for Pow.Context.get_by/1.","ref":"WidgetMarket.Users.html#get_by/1","title":"WidgetMarket.Users.get_by/1","type":"function"},{"doc":"Gets a single user.Raises Ecto.NoResultsError if the User does not exist.Examplesiex&gt; get_user(123) %User{} iex&gt; get_user(456) ** (Ecto.NoResultsError)","ref":"WidgetMarket.Users.html#get_user/1","title":"WidgetMarket.Users.get_user/1","type":"function"},{"doc":"Gets all usersExamplesiex&gt; list_users() [%User{}]","ref":"WidgetMarket.Users.html#list_users/0","title":"WidgetMarket.Users.list_users/0","type":"function"},{"doc":"","ref":"WidgetMarket.Users.html#pow_authenticate/1","title":"WidgetMarket.Users.pow_authenticate/1","type":"function"},{"doc":"","ref":"WidgetMarket.Users.html#pow_create/1","title":"WidgetMarket.Users.pow_create/1","type":"function"},{"doc":"","ref":"WidgetMarket.Users.html#pow_delete/1","title":"WidgetMarket.Users.pow_delete/1","type":"function"},{"doc":"","ref":"WidgetMarket.Users.html#pow_get_by/1","title":"WidgetMarket.Users.pow_get_by/1","type":"function"},{"doc":"","ref":"WidgetMarket.Users.html#pow_update/2","title":"WidgetMarket.Users.pow_update/2","type":"function"},{"doc":"Callback implementation for Pow.Context.update/2.","ref":"WidgetMarket.Users.html#update/2","title":"WidgetMarket.Users.update/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html","title":"WidgetMarket.Users.User","type":"module"},{"doc":"Callback implementation for Pow.Ecto.Schema.changeset/2.","ref":"WidgetMarket.Users.User.html#changeset/2","title":"WidgetMarket.Users.User.changeset/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_changeset/2","title":"WidgetMarket.Users.User.pow_changeset/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_current_password_changeset/2","title":"WidgetMarket.Users.User.pow_current_password_changeset/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_password_changeset/2","title":"WidgetMarket.Users.User.pow_password_changeset/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_user_id_field/0","title":"WidgetMarket.Users.User.pow_user_id_field/0","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_user_id_field_changeset/2","title":"WidgetMarket.Users.User.pow_user_id_field_changeset/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_validate_after_compilation!/2","title":"WidgetMarket.Users.User.pow_validate_after_compilation!/2","type":"function"},{"doc":"","ref":"WidgetMarket.Users.User.html#pow_verify_password/2","title":"WidgetMarket.Users.User.pow_verify_password/2","type":"function"},{"doc":"Callback implementation for Pow.Ecto.Schema.verify_password/2.","ref":"WidgetMarket.Users.User.html#verify_password/2","title":"WidgetMarket.Users.User.verify_password/2","type":"function"},{"doc":"The Widgets context.","ref":"WidgetMarket.Widgets.html","title":"WidgetMarket.Widgets","type":"module"},{"doc":"Returns an %Ecto.Changeset{} for tracking widget changes.Examplesiex&gt; change_widget(widget) %Ecto.Changeset{data: %Widget{}}","ref":"WidgetMarket.Widgets.html#change_widget/2","title":"WidgetMarket.Widgets.change_widget/2","type":"function"},{"doc":"Creates a widget.Examplesiex&gt; create_widget(%{field: value}) {:ok, %Widget{}} iex&gt; create_widget(%{field: bad_value}) {:error, %Ecto.Changeset{}}","ref":"WidgetMarket.Widgets.html#create_widget/1","title":"WidgetMarket.Widgets.create_widget/1","type":"function"},{"doc":"Deletes all widgets.Examplesiex&gt; delete_all() {:ok, 1} iex&gt; delete_all() {:error, %Ecto.Changeset{}}","ref":"WidgetMarket.Widgets.html#delete_all/0","title":"WidgetMarket.Widgets.delete_all/0","type":"function"},{"doc":"Deletes a widget.Examplesiex&gt; delete_widget(widget) {:ok, %Widget{}} iex&gt; delete_widget(widget) {:error, %Ecto.Changeset{}}","ref":"WidgetMarket.Widgets.html#delete_widget/1","title":"WidgetMarket.Widgets.delete_widget/1","type":"function"},{"doc":"Gets a single widget.Raises Ecto.NoResultsError if the Widget does not exist.Examplesiex&gt; get_widget!(123) %Widget{} iex&gt; get_widget!(456) ** (Ecto.NoResultsError)","ref":"WidgetMarket.Widgets.html#get_widget!/1","title":"WidgetMarket.Widgets.get_widget!/1","type":"function"},{"doc":"Returns the list of widgets.Examplesiex&gt; list_widgets() [%Widget{}, ...]","ref":"WidgetMarket.Widgets.html#list_widgets/0","title":"WidgetMarket.Widgets.list_widgets/0","type":"function"},{"doc":"Updates a widget.Examplesiex&gt; update_widget(widget, %{field: new_value}) {:ok, %Widget{}} iex&gt; update_widget(widget, %{field: bad_value}) {:error, %Ecto.Changeset{}}","ref":"WidgetMarket.Widgets.html#update_widget/2","title":"WidgetMarket.Widgets.update_widget/2","type":"function"},{"doc":"The entrypoint for defining your web interface, such as controllers, views, channels and so on.This can be used in your application as:use WidgetMarketWeb, :controller use WidgetMarketWeb, :viewThe definitions below will be executed for every view, controller, etc, so keep them short and clean, focused on imports, uses and aliases.Do NOT define functions inside the quoted expressions below. Instead, define any helper function in modules and import those modules here.","ref":"WidgetMarketWeb.html","title":"WidgetMarketWeb","type":"module"},{"doc":"When used, dispatch to the appropriate controller/view/etc.","ref":"WidgetMarketWeb.html#__using__/1","title":"WidgetMarketWeb.__using__/1","type":"macro"},{"doc":"","ref":"WidgetMarketWeb.html#channel/0","title":"WidgetMarketWeb.channel/0","type":"function"},{"doc":"","ref":"WidgetMarketWeb.html#controller/0","title":"WidgetMarketWeb.controller/0","type":"function"},{"doc":"","ref":"WidgetMarketWeb.html#router/0","title":"WidgetMarketWeb.router/0","type":"function"},{"doc":"","ref":"WidgetMarketWeb.html#view/0","title":"WidgetMarketWeb.view/0","type":"function"},{"doc":"Conveniences for translating and building error messages.","ref":"WidgetMarketWeb.ErrorHelpers.html","title":"WidgetMarketWeb.ErrorHelpers","type":"module"},{"doc":"Generates tag for inlined form input errors.","ref":"WidgetMarketWeb.ErrorHelpers.html#error_tag/2","title":"WidgetMarketWeb.ErrorHelpers.error_tag/2","type":"function"},{"doc":"Translates an error message using gettext.","ref":"WidgetMarketWeb.ErrorHelpers.html#translate_error/1","title":"WidgetMarketWeb.ErrorHelpers.translate_error/1","type":"function"},{"doc":"A module providing Internationalization with a gettext-based API.By using Gettext, your module gains a set of macros for translations, for example:import WidgetMarketWeb.Gettext # Simple translation gettext(&quot;Here is the string to translate&quot;) # Plural translation ngettext(&quot;Here is the string to translate&quot;, &quot;Here are the strings to translate&quot;, 3) # Domain-based translation dgettext(&quot;errors&quot;, &quot;Here is the error message to translate&quot;)See the Gettext Docs for detailed usage.","ref":"WidgetMarketWeb.Gettext.html","title":"WidgetMarketWeb.Gettext","type":"module"},{"doc":"Callback implementation for Gettext.Backend.dgettext/3.","ref":"WidgetMarketWeb.Gettext.html#dgettext/3","title":"WidgetMarketWeb.Gettext.dgettext/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dgettext_noop/2.","ref":"WidgetMarketWeb.Gettext.html#dgettext_noop/2","title":"WidgetMarketWeb.Gettext.dgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext/5.","ref":"WidgetMarketWeb.Gettext.html#dngettext/5","title":"WidgetMarketWeb.Gettext.dngettext/5","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dngettext_noop/3.","ref":"WidgetMarketWeb.Gettext.html#dngettext_noop/3","title":"WidgetMarketWeb.Gettext.dngettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpgettext/4.","ref":"WidgetMarketWeb.Gettext.html#dpgettext/4","title":"WidgetMarketWeb.Gettext.dpgettext/4","type":"macro"},{"doc":"","ref":"WidgetMarketWeb.Gettext.html#dpgettext_noop/3","title":"WidgetMarketWeb.Gettext.dpgettext_noop/3","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.dpngettext/6.","ref":"WidgetMarketWeb.Gettext.html#dpngettext/6","title":"WidgetMarketWeb.Gettext.dpngettext/6","type":"macro"},{"doc":"","ref":"WidgetMarketWeb.Gettext.html#dpngettext_noop/4","title":"WidgetMarketWeb.Gettext.dpngettext_noop/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext/2.","ref":"WidgetMarketWeb.Gettext.html#gettext/2","title":"WidgetMarketWeb.Gettext.gettext/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_comment/1.","ref":"WidgetMarketWeb.Gettext.html#gettext_comment/1","title":"WidgetMarketWeb.Gettext.gettext_comment/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.gettext_noop/1.","ref":"WidgetMarketWeb.Gettext.html#gettext_noop/1","title":"WidgetMarketWeb.Gettext.gettext_noop/1","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_bindings/2.","ref":"WidgetMarketWeb.Gettext.html#handle_missing_bindings/2","title":"WidgetMarketWeb.Gettext.handle_missing_bindings/2","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_plural_translation/6.","ref":"WidgetMarketWeb.Gettext.html#handle_missing_plural_translation/6","title":"WidgetMarketWeb.Gettext.handle_missing_plural_translation/6","type":"function"},{"doc":"Callback implementation for Gettext.Backend.handle_missing_translation/4.","ref":"WidgetMarketWeb.Gettext.html#handle_missing_translation/4","title":"WidgetMarketWeb.Gettext.handle_missing_translation/4","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Gettext.html#lgettext/5","title":"WidgetMarketWeb.Gettext.lgettext/5","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Gettext.html#lngettext/7","title":"WidgetMarketWeb.Gettext.lngettext/7","type":"function"},{"doc":"Callback implementation for Gettext.Backend.ngettext/4.","ref":"WidgetMarketWeb.Gettext.html#ngettext/4","title":"WidgetMarketWeb.Gettext.ngettext/4","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.ngettext_noop/2.","ref":"WidgetMarketWeb.Gettext.html#ngettext_noop/2","title":"WidgetMarketWeb.Gettext.ngettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pgettext/3.","ref":"WidgetMarketWeb.Gettext.html#pgettext/3","title":"WidgetMarketWeb.Gettext.pgettext/3","type":"macro"},{"doc":"","ref":"WidgetMarketWeb.Gettext.html#pgettext_noop/2","title":"WidgetMarketWeb.Gettext.pgettext_noop/2","type":"macro"},{"doc":"Callback implementation for Gettext.Backend.pngettext/5.","ref":"WidgetMarketWeb.Gettext.html#pngettext/5","title":"WidgetMarketWeb.Gettext.pngettext/5","type":"macro"},{"doc":"","ref":"WidgetMarketWeb.Gettext.html#pngettext_noop/3","title":"WidgetMarketWeb.Gettext.pngettext_noop/3","type":"macro"},{"doc":"","ref":"WidgetMarketWeb.ReloadUserPlug.html","title":"WidgetMarketWeb.ReloadUserPlug","type":"module"},{"doc":"Module with named helpers generated from WidgetMarketWeb.Router.","ref":"WidgetMarketWeb.Router.Helpers.html","title":"WidgetMarketWeb.Router.Helpers","type":"module"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_path/2","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_path/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_path/3","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_path/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_path/4","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_path/4","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_path/5","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_path/5","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_url/2","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_url/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_url/3","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_url/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_url/4","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_url/4","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#live_dashboard_url/5","title":"WidgetMarketWeb.Router.Helpers.live_dashboard_url/5","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#page_path/2","title":"WidgetMarketWeb.Router.Helpers.page_path/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#page_path/3","title":"WidgetMarketWeb.Router.Helpers.page_path/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#page_url/2","title":"WidgetMarketWeb.Router.Helpers.page_url/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#page_url/3","title":"WidgetMarketWeb.Router.Helpers.page_url/3","type":"function"},{"doc":"Generates the path information including any necessary prefix.","ref":"WidgetMarketWeb.Router.Helpers.html#path/2","title":"WidgetMarketWeb.Router.Helpers.path/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_registration_path/2","title":"WidgetMarketWeb.Router.Helpers.pow_registration_path/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_registration_path/3","title":"WidgetMarketWeb.Router.Helpers.pow_registration_path/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_registration_url/2","title":"WidgetMarketWeb.Router.Helpers.pow_registration_url/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_registration_url/3","title":"WidgetMarketWeb.Router.Helpers.pow_registration_url/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_session_path/2","title":"WidgetMarketWeb.Router.Helpers.pow_session_path/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_session_path/3","title":"WidgetMarketWeb.Router.Helpers.pow_session_path/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_session_url/2","title":"WidgetMarketWeb.Router.Helpers.pow_session_url/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#pow_session_url/3","title":"WidgetMarketWeb.Router.Helpers.pow_session_url/3","type":"function"},{"doc":"Generates an integrity hash to a static asset given its file path.","ref":"WidgetMarketWeb.Router.Helpers.html#static_integrity/2","title":"WidgetMarketWeb.Router.Helpers.static_integrity/2","type":"function"},{"doc":"Generates path to a static asset given its file path.","ref":"WidgetMarketWeb.Router.Helpers.html#static_path/2","title":"WidgetMarketWeb.Router.Helpers.static_path/2","type":"function"},{"doc":"Generates url to a static asset given its file path.","ref":"WidgetMarketWeb.Router.Helpers.html#static_url/2","title":"WidgetMarketWeb.Router.Helpers.static_url/2","type":"function"},{"doc":"Generates the connection/endpoint base URL without any path information.","ref":"WidgetMarketWeb.Router.Helpers.html#url/1","title":"WidgetMarketWeb.Router.Helpers.url/1","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#widget_path/2","title":"WidgetMarketWeb.Router.Helpers.widget_path/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#widget_path/3","title":"WidgetMarketWeb.Router.Helpers.widget_path/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#widget_path/4","title":"WidgetMarketWeb.Router.Helpers.widget_path/4","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#widget_url/2","title":"WidgetMarketWeb.Router.Helpers.widget_url/2","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#widget_url/3","title":"WidgetMarketWeb.Router.Helpers.widget_url/3","type":"function"},{"doc":"","ref":"WidgetMarketWeb.Router.Helpers.html#widget_url/4","title":"WidgetMarketWeb.Router.Helpers.widget_url/4","type":"function"},{"doc":"This module contains the controller actions for widget manipulation","ref":"WidgetMarketWeb.WidgetController.html","title":"WidgetMarketWeb.WidgetController","type":"module"},{"doc":"Creates a new widget","ref":"WidgetMarketWeb.WidgetController.html#create/2","title":"WidgetMarketWeb.WidgetController.create/2","type":"function"},{"doc":"Deletes a widget. Only the widget owner is allowed to do this.","ref":"WidgetMarketWeb.WidgetController.html#delete/2","title":"WidgetMarketWeb.WidgetController.delete/2","type":"function"},{"doc":"Yields a form for updating a widget","ref":"WidgetMarketWeb.WidgetController.html#edit/2","title":"WidgetMarketWeb.WidgetController.edit/2","type":"function"},{"doc":"Returns the list of widgets.","ref":"WidgetMarketWeb.WidgetController.html#index/2","title":"WidgetMarketWeb.WidgetController.index/2","type":"function"},{"doc":"Yields a form for creating a new widget","ref":"WidgetMarketWeb.WidgetController.html#new/2","title":"WidgetMarketWeb.WidgetController.new/2","type":"function"},{"doc":"Purchases a widget. Creates a marketplace transaction","ref":"WidgetMarketWeb.WidgetController.html#purchase/2","title":"WidgetMarketWeb.WidgetController.purchase/2","type":"function"},{"doc":"Displays a widget","ref":"WidgetMarketWeb.WidgetController.html#show/2","title":"WidgetMarketWeb.WidgetController.show/2","type":"function"},{"doc":"Updates a widget. Only the widget owner is allowed to do this.","ref":"WidgetMarketWeb.WidgetController.html#update/2","title":"WidgetMarketWeb.WidgetController.update/2","type":"function"}]