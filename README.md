# generator-react-native

## Manual Notes

### After `react-native:base`

Add the following to the `[ignore]` section in the `.flowconfig`.

```
; Ignore libraries we don’t want checking
.*/node_modules/react-native-experimental-navigation/.*
.*/node_modules/react-static-container/.*
```

Add the following to your `.gitignore`.

```
# Enviroments
.env
.env.development
.env.staging
.env.live
.env.production
```
