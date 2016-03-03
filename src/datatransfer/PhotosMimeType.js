/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PhotosMimeType
 */
const PhotosMimeType = {
  isImage(mimeString) {
    return getParts(mimeString)[0] === 'image';
  },

  isJpeg(mimeString) {
    const parts = getParts(mimeString);
    return (
      PhotosMimeType.isImage(mimeString) &&
      // see http://fburl.com/10972194
      (parts[1] === 'jpeg' || parts[1] === 'pjpeg')
    );
  },
};

function getParts(mimeString) {
  return mimeString.split('/');
}

module.exports = PhotosMimeType;
