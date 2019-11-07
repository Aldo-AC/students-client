import React from "react";
import { Route, Switch } from "react-router-dom";
import { StudentListViewFactory } from "./views/StudentListView";
import { AxiosStudentService } from "./services/AxiosStudentService";
import { StudentDetailsViewFactory } from "./views/StudentDetailsView";
import { AddStudentViewFactory } from "./views/AddStudentView";
import { EditStudentDetailsViewFactory } from "./views/EditStudentDetailsView";

const axiosStudentService = AxiosStudentService();
const StudentListView = StudentListViewFactory(axiosStudentService);
const StudentDetailsView = StudentDetailsViewFactory(axiosStudentService);
const AddStudentView = AddStudentViewFactory(axiosStudentService);
const EditStudentDetailsView = EditStudentDetailsViewFactory(axiosStudentService);

export const StudentRouter: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <StudentListView />
      </Route>

      <Route path="/add">
        <AddStudentView />
      </Route>

      <Route exact path="/:id">
        <StudentDetailsView />
      </Route>

      <Route path="/:id/edit">
        <EditStudentDetailsView />
      </Route>
    </Switch>
  );
};
