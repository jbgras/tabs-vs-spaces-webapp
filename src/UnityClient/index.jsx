import React, { Fragment, version } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";
import styles from "./styles.module.css";

function generateConfig(version) {
  const baseUrl = "/builds/tabs-vs-spaces-web";
  const url = `${baseUrl}-${version}`
  return {
    loaderUrl: `${url}.loader.js`,
    dataUrl: `${url}.data`,
    frameworkUrl: `${url}.framework.js`,
    codeUrl: `${url}.wasm`
  }
}

export default function UnityClient(props) {
    const { version } = props;
    const clientConfig = generateConfig(version);
    const { unityProvider, loadingProgression, isLoaded } = useUnityContext(clientConfig);

    return (
        <Fragment>
          {!isLoaded && (
            <p>Loading game from the Azure cloud... {Math.round(loadingProgression * 100)}%</p>
          )}
          <Unity
            className={styles.unityContainer}
            unityProvider={unityProvider}
            style={{ visibility: isLoaded ? "visible" : "hidden" }}
          />
        </Fragment>
      );
}