class Article < ApplicationRecord
	has_attached_file :data
	do_not_validate_attachment_file_type :data
end
