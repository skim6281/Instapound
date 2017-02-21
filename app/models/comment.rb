# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  user_id    :integer          not null
#  image_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :body, :commenter, :image, presence: true

  belongs_to :image

  belongs_to :commenter,
    class_name: "User",
    foreign_key: :user_id
    
end
