# Change these

set :repo_url, "git@github.com:vedha98/biggy.git"
set :scm, :gitcopy
set :application, "biggy"
set :user, "root"
# Don't change these unless you know what you're doing
set :pty, true
set :use_sudo, true
set :stage, :production
set :deploy_via, :remote_cache
set :deploy_to, "/var/www/biggy"
set :ssh_options, { :forward_agent => true,
                    :user => "root",
                    :keepalive => true,
                    :keepalive_interval => 3000 }
set :migration_role, "app" # Defaults to 'db'
set :assets_roles, [:app]
# set :puma_bind, "unix://#{shared_path}/tmp/sockets/puma.sock"
# set :puma_state, "#{shared_path}/tmp/pids/puma.state"
# set :puma_pid, "#{shared_path}/tmp/pids/puma.pid"
# Change to true if using ActiveRecord

## Defaults:
# set :scm,           :git
# set :branch,        :master
# set :format,        :pretty
# set :log_level,     :debug
# set :keep_releases, 5

## Linked Files & Directories (Default None):
# set :linked_files, %w{config/database.yml}
# set :linked_dirs,  %w{bin log tmp/pids tmp/cache tmp/sockets vendor/bundle public/system}

# namespace :puma do
#   desc "Create Directories for Puma Pids and Socket"
#   task :make_dirs do
#     on roles(:app) do
#       execute "mkdir #{shared_path}/tmp/sockets -p"
#       execute "mkdir #{shared_path}/tmp/pids -p"
#     end
#   end

#   before :start, :make_dirs
# end

# namespace :deploy do
#   desc "Make sure local git is in sync with remote."
#   task :check_revision do
#     on roles(:app) do
#       unless `git rev-parse HEAD` == `git rev-parse origin/master`
#         puts "WARNING: HEAD is not the same as origin/master"
#         puts "Run `git push` to sync changes."
#         exit
#       end
#     end
#   end

#   desc "Initial Deploy"
#   task :initial do
#     on roles(:app) do
#       before "deploy:restart", "puma:start"
#       invoke "deploy"
#     end
#   end

#   desc "Restart application"
#   task :restart do
#     on roles(:app), in: :sequence, wait: 5 do
#       invoke "puma:restart"
#     end
#   end

#   before :starting, :check_revision
#   after :finishing, :compile_assets
#   after :finishing, :cleanup
#   after :finishing, :restart
# end

# ps aux | grep puma    # Get puma pid
# kill -s SIGUSR2 pid   # Restart puma
# kill -s SIGTERM pid   # Stop puma