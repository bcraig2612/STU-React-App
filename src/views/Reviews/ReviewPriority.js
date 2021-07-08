import React, {useCallback} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ContentSection from "../../components/ContentSection";
import Breadcrumb from "../../components/Breadcrumb";
import ImportExportIcon from '@material-ui/icons/ImportExport';
import { DragDropContext, Draggable } from 'react-beautiful-dnd';

const useStyles = makeStyles((theme) => ({

}));

const breadCrumbs = [
  {title: "Dashboard", uri: "/"},
  {title: "Reviews", uri: "/reviews"},
  {title: "Settings", uri: "/reviews/settings"},
  {title: "Review Priority", uri: "/reviews/settings/review-priority"},
];

function ReviewPriority(props) {
  const classes = useStyles();
  // using useCallback is optional
  const onBeforeCapture = useCallback(() => {
    /*...*/
  }, []);
  const onBeforeDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragStart = useCallback(() => {
    /*...*/
  }, []);
  const onDragUpdate = useCallback(() => {
    /*...*/
  }, []);
  const onDragEnd = useCallback(() => {
    // the only one that is required
  }, []);

  return (
    <React.Fragment>
      <Breadcrumb links={breadCrumbs} />

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <ContentSection title="Review Priority" subTitle="Want to get more reviews on other review sites? You can add any review website here that you would like to get reviews on. Your customers will see these buttons in the same order that they are here.">
            {/*<DragDropContext*/}
            {/*  onBeforeCapture={onBeforeCapture}*/}
            {/*  onBeforeDragStart={onBeforeDragStart}*/}
            {/*  onDragStart={onDragStart}*/}
            {/*  onDragUpdate={onDragUpdate}*/}
            {/*  onDragEnd={onDragEnd}*/}
            {/*>*/}
            {/*  <Draggable draggableId={1} index={1}>*/}
            {/*    <div>Hello world</div>*/}
            {/*  </Draggable>*/}
            {/*  <Draggable draggableId={2} index={2}>*/}
            {/*    <div>Hello world</div>*/}
            {/*  </Draggable>*/}
            {/*</DragDropContext>*/}
          </ContentSection>
        </Grid>
      </Grid>
    </React.Fragment>

  );
}

export default ReviewPriority;