import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from 'prop-types';

import { getLogs } from "../../actions/logActions";

import LogItem from "./LogItem";
import PreLoader from "../layouts/PreLoader";

const Logs = ({ log: { logs, loading }, getLogs }) => {

  useEffect(() => {
    getLogs();
  }, []);

  if (loading || logs === null) {
    return <PreLoader />;
  }
  return (
    <div className='container'>
      <ul className='collection with-header'>
        <li className='collection-header'>
          <h4 className='center'>System Logs</h4>
        </li>
        {!loading && logs.length == 0 ? (
          <h4>No logs to show</h4>
        ) : (
          logs.map((log) => <LogItem log={log} key={log.id} />)
        )}
      </ul>
    </div>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  log: state.log
});

export default connect(mapStateToProps, { getLogs })(Logs);
