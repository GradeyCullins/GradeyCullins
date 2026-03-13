class ApplicationController < ActionController::Base
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  # Disabled for development to allow mobile browser testing
  allow_browser versions: :modern unless Rails.env.development?

  before_action :track_visit

  private

  def track_visit
    SiteVisit.track!(request.remote_ip)
  rescue => e
    Rails.logger.error("Failed to track visit: #{e.message}")
  end

  def camelize_props(props)
    props.deep_transform_keys! { |key| key.camelize(:lower) }
    props
  end
end
