/**
 * Copyright 2012 {<ANVIL_COPYRIGHT>}. All Rights Reserved.
 *
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file.
 */

/**
 * @fileoverview {<ANVIL_PROJECT_NAMESPACE>} exports.
 *
 * @author {<ANVIL_AUTHOR_EMAIL>} ({<ANVIL_AUTHOR_NAME>})
 */

goog.provide('{<ANVIL_PROJECT_NAMESPACE>}.exports');

goog.require('{<ANVIL_PROJECT_NAMESPACE>}');



/**
 * @define {boolean} Whether to enable exporting of the
 *     {<ANVIL_PROJECT_NAMESPACE>} types and namespace.
 *
 * This should only be enabled in builds of the standalone library. If you're
 * including this code with it enabled in Closurized javascript then you'll
 * prevent renaming.
 */
{<ANVIL_PROJECT_NAMESPACE>}.exports.ENABLE_EXPORTS = false;


if ({<ANVIL_PROJECT_NAMESPACE>}.exports.ENABLE_EXPORTS) {
  // {<ANVIL_PROJECT_NAMESPACE>} utilities
  goog.exportSymbol(
      '{<ANVIL_PROJECT_NAMESPACE>}.someMethod',
      {<ANVIL_PROJECT_NAMESPACE>}.someMethod);
}
