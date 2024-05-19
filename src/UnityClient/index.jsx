import React, { Fragment, version } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./styles.module.css";

export default function UnityClient(props) {
    const { version } = props;
    const baseUrl = "https://brk254.blob.core.windows.net/builds/tabs-vs-spaces-web";
    const url = `${baseUrl}-${version}`
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: `${url}.loader.js`,
        dataUrl: `${url}.data`,
        frameworkUrl: `${url}.framework.js`,
        codeUrl: `${url}.wasm`,
    });

    return (
        <Fragment>
          {!isLoaded && (
            <p>Loading Application... {Math.round(loadingProgression * 100)}%</p>
          )}
          <Unity
            className={styles.unityContainer}
            unityProvider={unityProvider}
            style={{ visibility: isLoaded ? "visible" : "hidden" }}
          />
        </Fragment>
      );
}