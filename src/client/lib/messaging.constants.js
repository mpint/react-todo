import { startCase } from 'lodash';

export const snackbar = {
  success: {
    save:'Document was sucessfully saved',
    fetch:'Document was successfully fetched',
    saveBulkJob: 'Bulk job was saved',
    removeBulkJob: 'Bulk job was removed',
    runBulkJob: 'Bulk job was queued for execution',
    inputSchema: 'Input schema updated',
    runSingleJob: (model, type) => `${startCase(model)}(${type}) has been queued for execution`,
    runCohorts: 'Selected cohort ran successfully',
    killJob: 'Selected jobs will be killed',
    jobPollingInProgress: (i) => `Job (${id}) is running...`,
    jobPollingStillInProgress: (id) => `Job (${id}) is still running...`,
    status: 'Status dashboard updated',
    profile: 'Company profile updated'

  },
  error: {
    email: 'Your email address is invalid',
    phoneNumber:'Invalid phone number',
    userNameorPassword:'Invalid username or password',
    serverFailure: 'Failed to establish connection with server',
    unknown: 'An unknown error occured',
    save:'Error saving document',
    fetch:'Error fetching document',
    mappingAutoDetect: 'Failed to parse provided file',
    inputSchema: 'Failed to update input schema',
    saveBulkJob: 'Failed to save bulk job',
    removeBulkJob: 'Failed to remove bulk job',
    runBulkJob: 'Failed to queue bulk job',
    runSingleJob: (model, type) => `${startCase(model)}(${type}) failed to run`,
    runCohorts: 'Failed to run desired cohort',
    killJob: 'Failed to kill job',
    status: 'Error updating status dashboard',
    profile: 'Error saving profile',
    dashboard: (dashboardType) => `Failed to retrieve dashboard (${dashboardType})`
  },
  info: {
    jobPollingInProgress: (id) => `Job (${id}) is running...`,
    jobPollingStillInProgress: (id) => `Job (${id}) is still running...`
  }
};

export const pages = {
  companySelectionRequired: {
    title: '',
    slug: '',
    content: {
      message: 'Choose a company from the dropdown to get started'
    }
  },
  mapping: {
    title: 'Map',
    slug: 'mapping'
  },
  rawData: {
    title: 'Raw Data',
    slug: 'raw-data',
    action: 'Upload new documents',
    tooltip: 'do some really important stuff',
    content: {
      uploadStepText: 'Add csv document to the input schema',
      verifyStepText: 'Verify the document headers'
    }
  },
  editor: {
    title: 'Schema Editor',
    slug: 'editor',
    action: 'Modify existing schema',
    tooltip: 'do some really important stuff'
  },
  profile: {
    title: 'Profile',
    slug: 'profile'
  },
  status: {
    title: 'Status',
    slug: 'status',
    content: {
      noJobs: 'No jobs running'
    }
  },
  dashboard: {
    title: 'Dashboard',
    slug: ''
  },
  transform: {
    title: 'Transform',
    slug: 'transform',
    action: 'Run a single job',
    tooltip: 'do some really important stuff'
  },
  train: {
    title: 'Train',
    slug: 'train',
    action: 'Train models',
    tooltip: 'do some really important stuff',
    content: {
      taggingStepText: 'do the tagging',
      timeslicerStepText: 'do the timeslicin',
      dataGeneratorStepText: 'do the data generating',
      trainModelStepText: 'train all the models'
    }
  },
  apply: {
    title: 'Apply',
    slug: 'apply',
    action: 'Run a single job',
    tooltip: 'do some really important stuff',
  },
  bulkJob: {
    title: 'Bulk job runner',
    slug: 'bulk',
    action: 'Run bulk jobs',
    tooltip: 'do some really important stuff'
  },
  cohorts: {
    title: 'Cohorts Viewer',
    slug: 'cohorts'
  },
  logAnalytics: {
    title: 'Logs',
    slug: 'logs'
  },
  review: {
    title: 'Review',
    slug: 'review'
  },
  dataReconciliation: {
    title: 'Data Reconciliation',
    action: 'Train models',
    slug: 'data-reconciliation'
  },
  rawStats: {
    title: 'Raw Statistics',
    action: 'Train models',
    slug: 'raw-stats'
  },
  temporalStats: {
    title: 'Temporal Statistics',
    action: 'Train models',
    slug: 'temporal-stats'
  },
  fhirStats: {
    title: 'FHIR Statistics',
    action: 'Train models',
    slug: 'fhir-stats'
  }
};

export const session = {
  validityCheck: 'Attempting to retrieve your previous session...',
  validitySuccess: 'Restoring your session...',
  validityFail: 'No active session was found...',
};

export default {
  snackbar,
  pages,
  auth: {
    noConnection: 'Failed to connect to Morpheus Router...this usually means it needs to be restarted',
    session
  },
  buttons: {
    companySelect: 'Select a company',
    logout: 'Logout',
    tour: 'Tour Mode',
    killJobs: 'Kill selected jobs',
  },
  components: {
    rawData: {
      uploadButtonText: (filename) => `Upload ${filename || 'file'}`,
      autoDetect: {
        title: 'Document selection'
      },
      manualEntry: {
        title: 'Document verification'
      }
    },
    bulkJobs: {
      title: 'Configure bulk jobs',
      label: (numSelected) => `${numSelected > 1 ? `(${numSelected})` : '' } Run bulk jobs`,
      run: 'Run',
      save: 'Save',
      saveRun: 'Save and run'
    },
    loginForm: {
      rememberMe: 'Remember me',
      noJobs: 'No saved jobs found'
    },
    profileForm: {
      title: (companyName) => `${companyName} Profile`
    },
    bulkJobDashboard: {
      title: 'Saved Bulk Jobs',
      noJobs: 'No saved jobs found'
    },
    jobDashboard: {
      title: 'Saved Bulk Jobs',
      noJobs: 'No jobs found',
      runSingleJob: 'Run job',
      resetSingleJob: 'Reset',
      scopeSelect: {
        floatingLabel: 'Select a scope',
        hintLabel: 'Select a scope',
      },
      jobSelect: {
        title: 'Job selection',
        floatingLabel: 'Select a job',
        hintLabel: 'Select a job',
      },
      configSelect: {
        title: 'Job configuration'
      }
    },
    cohortsSelector: {
      title: 'Timeslicer all day',
      noDiagnoses: 'There was an error fetching the diagnosis list',
      hintLabel: (name) => `Select a ${name.toLowerCase()}`
    }
  }
};
