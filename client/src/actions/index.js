export const SHOW_FOOTER = 'SHOW_FOOTER';
export const HIDE_FOOTER = 'HIDE_FOOTER';
export const HIDE_SHADOW = 'HIDE_SHADOW';
export const SHOW_SHADOW = 'SHOW_SHADOW';

export function hideBoxShadow() {
    return dispatch =>  {
        dispatch({ type: HIDE_SHADOW })
    };
}

export function showBoxShadow() {
    return dispatch =>  {
        dispatch({ type: SHOW_SHADOW })
    };
}

export function showFooter() {
    return dispatch =>  {
        dispatch({ type: SHOW_FOOTER })
    };
}

export function hideFooter() {
    return dispatch =>  {
        dispatch({ type: HIDE_FOOTER })
    };
}

export function subscribe(data) {
    const URL = "/subscribe";
    return dispatch => {
        return fetch(URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
            })
            .catch(error => {
                console.log(error.response)
            });
    };
}

export function contact(data) {
    const URL = "/sendmessage";
    return (dispatch, getState) => {
        return fetch(URL, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {

            })
            .catch(error => {
                console.log(error.response)
            });
    };
}