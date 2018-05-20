import { config } from "../config";
import { PublishingInformation } from "../publishing-information";
import { ImageLinks } from "./image-links";
/* tslint:disable */
export function skill(url: string, userSetInfo: any, links: ImageLinks) {
    return {
      manifest: {
      publishingInformation: {
        locales: setPublishingInfoForLocales(userSetInfo, links),
        isAvailableWorldwide: true,
        testingInstructions: userSetInfo.TESTING_INSTRUCTIONS,
        category: userSetInfo.CATEGORY,
        distributionCountries: [],
      },
      apis: {
        custom: {
          endpoint: {
            sslCertificateType: "Wildcard",
            uri: url,
          },
          interfaces: [
            {
              type: "AUDIO_PLAYER"
            }
          ]
        },
      },
      manifestVersion: "1.0",
      privacyAndCompliance: {
        allowsPurchases: false,
        locales: setPublishingInfoForPrivacyAndCompliance(),
        isExportCompliant: true,
        isChildDirected: false,
        usesPersonalInfo: false,
        containsAds: false,
      },
    },
  };
}

/**
 * For each locale specified in config.  Create a new section
 * 
 * @param userSetInfo 
 * @param links 
 */
function setPublishingInfoForLocales(userSetInfo: any, links : ImageLinks) {

  return config.locales.reduce((acc, locale) => {
    acc[locale] = {
        summary: userSetInfo.SUMMARY,
        examplePhrases: [
          userSetInfo.EXAMPLE_PHRASES_1,
          userSetInfo.EXAMPLE_PHRASES_2,
          userSetInfo.EXAMPLE_PHRASES_3
        ],
        name: userSetInfo.APP_NAME,
        description: userSetInfo.DESCRIPTION,
        smallIconUri: links.small,
        largeIconUri: links.big,
      }
      return acc;
    }, {});
}

/**
 * For each locale specified in config.  Create a new section
 */
function setPublishingInfoForPrivacyAndCompliance() {
  return config.locales.reduce((acc, locale) => {
    acc[locale] = {
        termsOfUseUrl: "",
        privacyPolicyUrl: "",
      }
      return acc;
    }, {});
}
