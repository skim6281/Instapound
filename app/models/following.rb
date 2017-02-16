# == Schema Information
#
# Table name: followings
#
#  id          :integer          not null, primary key
#  followee_id :integer          not null
#  follower_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Following < ApplicationRecord
  validates :followee, :follower, presence: true
  validates :follower, uniqueness: { scope: :followee }

  belongs_to :followee,
    class_name: "User",
    foreign_key: :followee_id

  belongs_to :follower,
    class_name: "User",
    foreign_key: :follower_id

end
