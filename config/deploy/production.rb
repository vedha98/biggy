set :branch, "master"
set :stage, :production

# Setting RAILS_ENV environment variable on server
set :rails_env, :production

set :normalize_asset_timestamps, %{public/images public/javascripts public/stylesheets}

role :app, %w{root@15.206.148.242}

# Force rake through bundle exec
SSHKit.config.command_map[:rake] = "bundle exec rake"

# Force rails through bundle exec
SSHKit.config.command_map[:rails] = "bundle exec rails"

namespace :deploy do
  desc "Restart application"
  task :restart do
    on roles(:app), in: :sequence, wait: 5 do
      execute "sudo service nginx restart"
    end
  end

  after :finishing, "deploy:restart"
  after :finishing, "deploy:cleanup"
end

# set :branch, 'development'
# set :stage, :development
# set :rails_env, :development

# set :normalize_asset_timestamps, %{public/images public/javascripts public/stylesheets}

# role :app, %w{dorakdev@13.80.242.243}

# set :ssh_options, {
#  forward_agent: true,
#  user: "root"
# }

# namespace :deploy do
#   desc 'Stop the delayed_job process'
#   task :delayed_job_stop do
#   on roles(:app) do
#       within release_path do
#         with rails_env: :development do
#          execute :bundle, :exec, 'bin/delayed_job stop'
#         end
#       end
#     end
#   end
#   # desc "Update crontab with whenever"
#   # task :update_cron do
#   #   on roles(:app) do
#   #     within current_path do
#   #       with rails_env: :development do
#   #         execute "crontab -r"
#   #         execute :bundle, :exec, "whenever --update-crontab #{fetch(:application)}"
#   #       end
#   #     end
#   #   end
#   # end
#   desc 'Restart the delayed_job process'
#   task :delayed_job_restart do
#     on roles(:app) do
#       within release_path do
#         with rails_env: :development do
#           execute :bundle, :exec, 'bin/delayed_job restart'
#         end
#       end
#     end
#   end
#   before :starting, 'deploy:delayed_job_stop'
#   before :finishing, 'deploy:delayed_job_restart'
#   # before :finishing, 'deploy:update_cron'
# end
