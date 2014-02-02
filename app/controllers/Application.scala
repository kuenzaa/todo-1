package controllers

import play.api._
import play.api.mvc._
import play.api.data._
import play.api.data.Forms._
import models.Task

object Application extends Controller {

  def index = Action {
    Redirect(routes.Application.tasks)
  }

  def tasks = Action {
    Ok(views.html.index(Task.all(), taskForm))
  }

  def newTask() = play.mvc.Results.TODO

  def deleteTask(id: Long) = play.mvc.Results.TODO

  val taskForm = Form(
    "label" -> nonEmptyText
  )

}