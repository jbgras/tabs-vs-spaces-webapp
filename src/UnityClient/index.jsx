import React, { Fragment } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./styles.module.css";

export default function UnityClient() {
    const baseUrl = "https://brk254.blob.core.windows.net/builds/tabs-vs-spaces-web-0.2";
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext({
        loaderUrl: `${baseUrl}.loader.js`,
        dataUrl: `${baseUrl}.data`,
        frameworkUrl: `${baseUrl}.framework.js`,
        codeUrl: `${baseUrl}.wasm`,
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
