set :stage, :development
set :rails_env, :development
set :branch, "master"
server "15.206.148.242", user: "root", roles: %w{web app db}
