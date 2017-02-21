# == Schema Information
#
# Table name: likes
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Like < ApplicationRecord
  validates :image, :liker, presence: true
  validates :image, uniquness: { scope: :user }

  belongs_to :image

  belongs_to :liker,
    class_name: "User",
    foreign_key: :user_id
    
end
