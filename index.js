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
      "files": ["*.ts", "*.js", "*.vue"],
      "rules": {
        "no-console": "off",
        "no-alert": "off",
        "curly": ["error", "all"]
      }
    }
  ]
}