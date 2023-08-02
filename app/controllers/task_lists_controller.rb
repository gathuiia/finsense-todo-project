class TaskListsController < ApplicationController
  
  def index
    task_lists = TaskList.all
    render json: task_lists, status: :ok
  end

  def show
    task_list = find_task_list
    render json: task_list, status: :ok
  end

  def create
    task_list = TaskList.create!(task_list_params)
    render json: task_list, status: :created
  end

  def update
    task_list = find_task_list
    task_list.update!(task_list_params)
    render json: task_list, status: :ok
  end

  def destroy
    task_list = find_task_list
    task_list.destroy
    head :no_content
  end

  private

  def task_list_params
    params.permit(:description)
  end

  def find_task_list
    TaskList.find(params[:id])
  end
end
