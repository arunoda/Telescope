Package.describe({
  name: 'telescope:users',
  summary: 'Telescope permissions.',
  version: '0.1.0'
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'accounts-base',
    'templating',
    'telescope:lib@0.3.1',
    'telescope:settings@0.1.0',
    'iron:router@1.0.5',
    'aslagle:reactive-table@0.7.3'
  ]);

  api.addFiles([
    'lib/users.js',
    'lib/hooks.js',
    'lib/helpers.js',
    'lib/permissions.js',
    'lib/pubsub.js',
    'lib/routes.js'
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/account/user_account.html',
    'lib/client/templates/account/user_account.js',
    'lib/client/templates/dashboard/users-dashboard.html',
    'lib/client/templates/dashboard/users-dashboard.js',
    'lib/client/templates/dashboard/users_list_actions.html',
    'lib/client/templates/dashboard/users_list_actions.js',
    'lib/client/templates/dashboard/users_list_avatar.html',
    'lib/client/templates/dashboard/users_list_created_at.html',
    'lib/client/templates/dashboard/users_list_email.html',
    'lib/client/templates/dashboard/users_list_username.html',
    'lib/client/templates/profile/user_comments.html',
    'lib/client/templates/profile/user_comments.js',
    'lib/client/templates/profile/user_downvoted_posts.html',
    'lib/client/templates/profile/user_downvoted_posts.js',
    'lib/client/templates/profile/user_info.html',
    'lib/client/templates/profile/user_info.js',
    'lib/client/templates/profile/user_posts.html',
    'lib/client/templates/profile/user_posts.js',
    'lib/client/templates/profile/user_upvoted_posts.html',
    'lib/client/templates/profile/user_upvoted_posts.js',
    'lib/client/templates/sign_out.html',
    'lib/client/templates/user_edit.html',
    'lib/client/templates/user_edit.js',
    'lib/client/templates/user_email.html',
    'lib/client/templates/user_email.js',
    'lib/client/templates/user_item.html',
    'lib/client/templates/user_item.js',
    'lib/client/templates/user_profile.html',
    'lib/client/templates/user_profile.js'
  ], ['client']);

  api.addFiles([
    'lib/server/publications.js',
    'lib/server/stuff.js'
  ], ['server']);

  api.export('Users');

});
