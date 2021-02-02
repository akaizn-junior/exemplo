/**
 * Builds a classname based on boolean states
 * @param {{string: boolean}} classesToBuild An object with classnames to append to the default classname.
 * Evaluated by the names boolean state.
 * @param {string} className The default classname to append to, empty is none provided
 */
export function classNameBuilder(classesToBuild, className = '') {
  if (classesToBuild) {
    for (const k in classesToBuild) {
      if (classesToBuild[k]) {
        className = className.length
          ? className.concat(' ', k)
          : className.concat(k);
      }
    }
  }

  return className;
}
