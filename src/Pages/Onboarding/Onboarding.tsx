import React from "react";
import "../../assets/styles/pages/onboarding/main.scss"
import Welcome from "./Steps/Welcome";
import Backup from "./Steps/Backup";
import ServiceSettings from "./Steps/ServiceSettings";
import NodeSettings from "./Steps/NodeSettings";
import PayoutSettings from "./Steps/Payout-settings";
import {Route, Redirect, Switch} from "react-router-dom";
import {StepCounter} from "./StepCounter";
import TermsAndConditions from "./Steps/TemsAndConditions";
import {setStepsInfo} from '../../Services/Onboarding/StepsInfo'
import {useHistory} from 'react-router'
import {RootState} from "../../redux/store";
import {onboard} from "../../redux/actions/onboarding/onboard";
import {connect} from "react-redux";

interface StateInterface {
  sideImage: string;
  step: number
}

const mapStateToProps = (state: RootState) => ({
  onboarded: state.onboarding.onboarded,
});

const mapDispatchToProps = {onboard};
type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Onboarding: React.FC<Props> = props => {
  const history = useHistory();
  let stepInfo = setStepsInfo();
  const [values, setValues] = React.useState<StateInterface>({
    sideImage: stepInfo.image,
    step: stepInfo.step
  });

  history.listen((location: any, action: any) => {
    stepInfo = setStepsInfo();
    setValues({
      ...values,
      sideImage: stepInfo.image,
      step: stepInfo.step
    });
  });

  return (
    props.onboarded ?
      <Redirect to={"/"}/>
      :
      <div className="onboarding wrapper">
        <div className="steps">
          <div className="steps-content">
            <Switch>
              <Route exact={true} path={`/onboarding`} component={Welcome}/>
              <Route exact={true} path={`/onboarding/terms-and-conditions`} component={TermsAndConditions}/>
              <Route exact={true} path={`/onboarding/service-settings`} component={ServiceSettings}/>
              <Route exact={true} path={`/onboarding/backup`} component={Backup}/>
              <Route exact={true} path={`/onboarding/node-settings`} component={NodeSettings}/>
              <Route exact={true} path={`/onboarding/payout-settings`} component={PayoutSettings}/>
            </Switch>
            <StepCounter step={values.step}/>
          </div>
        </div>
        <div className="side">
          <img alt="onboarding" src={values.sideImage}/>
        </div>
      </div>
  )
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Onboarding)