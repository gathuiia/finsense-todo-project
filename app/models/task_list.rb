class TaskList < ApplicationRecord
    #validations
    validates :name, presence: :true


    #associations
    has_many :tasks
end
