export const SETTINGS_ATTEMPT = 'SETTINGS_ATTEMPT';

export function setSomeSettings(someSettings) {
  return (dispatch) => {
    dispatch({someSettings: someSettings, type: SETTINGS_ATTEMPT });
  }
}