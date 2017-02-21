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
  validates :image, :user, presence: true
  validates :image, uniqueness: { scope: :user }

  belongs_to :image
  belongs_to :user
end
