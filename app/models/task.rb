class Task < ApplicationRecord
    #validations
    validates :description, presence: :true

    #associations
    belongs_to :task_list
end
