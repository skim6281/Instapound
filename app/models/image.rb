# == Schema Information
#
# Table name: images
#
#  id                 :integer          not null, primary key
#  caption            :text
#  location           :string
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  photo_file_name    :string
#  photo_content_type :string
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#

class Image < ApplicationRecord
  validates :user, presence: true

  has_attached_file :photo,
                    styles: { thumb: "300x300>" },
                    processors: [:thumbnail, :paperclip_optimizer],
                    s3_protocol: :https,
                    default_url: "/images/:style/missing.png"
  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\z/

  belongs_to :user
  has_many :likes
  has_many :comments
end
