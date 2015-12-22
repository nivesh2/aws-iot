/*
 * Copyright 2010-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *  http://aws.amazon.com/apache2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

/**
 * @file aws_mtk_iot_config.h
 * @brief AWS IoT specific configuration file
 */

#ifndef SRC_SHADOW_IOT_SHADOW_CONFIG_H_
#define SRC_SHADOW_IOT_SHADOW_CONFIG_H_

// Get from console
// =================================================
#define AWS_IOT_MQTT_HOST              "custom.iot.us-west-2.amazonaws.com"
#define AWS_IOT_MQTT_PORT              8883
#define AWS_IOT_MQTT_CLIENT_ID         "digit"
#define AWS_IOT_MY_THING_NAME          "digit"
#define AWS_IOT_ROOT_CA_FILENAME      "root-CA.crt"
#define AWS_IOT_CERTIFICATE_FILENAME   "efda06da64-certificate.pem.crt"
#define AWS_IOT_PRIVATE_KEY_FILENAME   "efda06da64-private.pem.key"
// =================================================
#define AWS_IOT_TOPIC_NAME             "custom topic name" //MQTT subscribe/publish Topic name
// =================================================

/* change Wifi settings here */
#define WIFI_AP "wifi name"
#define WIFI_PASSWORD "password"
#define WIFI_AUTH LWIFI_WPA  // choose from LWIFI_OPEN, LWIFI_WPA, or LWIFI_WEP.

/* change server settings here */
VMSTR IP_ADDRESS = "54.181.123.111"; //currently only support IP address
/* end of user settings */

#endif /* SRC_SHADOW_IOT_SHADOW_CONFIG_H_ */
