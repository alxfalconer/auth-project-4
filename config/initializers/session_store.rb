if Rails.env == "production"
Rails.application.config.session_store :cookie_store, :key => '_auth-project-4', domain: "http://localhost:3000", same_site: :none, secure: true
else
    Rails.application.config.session_store :cookie_store, :key => '_auth-project-4', same_site: :none, secure: true
end
