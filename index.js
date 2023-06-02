module.exports={
    "extends": ["@antfu"],
  "overrides": [
    {
      "files": ["*.vue"],
      "rules": {
        "vue/component-tags-order": [
          "error",
          {
            "order": ["template", "script", "style"]
          }
        ]
      }
    },
    {
      "files": ["*"],
      "rules": {
        "no-console": "off",
        "no-alert": "off",
        "curly": ["error", "all"],
        "unused-imports/no-unused-imports":"off"
      }
    }
  ]
}