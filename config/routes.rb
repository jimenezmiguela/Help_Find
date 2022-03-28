Rails.application.routes.draw do

  root to: 'ajax#session'
  get "ajax/home"
  get "ajax/session"
  get "ajax/fbi"
  get "ajax/twitter"
  get "ajax/newsdata"
  get "ajax/missing_create"
  get "ajax/missing_read"
  get "ajax/missing_update"
  get "ajax/missing_delete"
  get "ajax/status_reports_create"
  get "ajax/status_reports_read"
  get "ajax/status_reports_update"
  get "ajax/status_reports_delete"
  get "ajax/about"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
